import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const GitHubStatus = ({ username }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [languages, setLanguages] = useState([]);
  const [contribColor, setContribColor] = useState("4ade80"); // green by default
  const [totalContributions, setTotalContributions] = useState(null);
  // Fetch total contributions using GitHub contributions page (scrape SVG text)
  useEffect(() => {
    if (!data) return;
    fetch(`https://github.com/users/${data.login}/contributions`)
      .then((res) => res.text())
      .then((html) => {
        // Parse the total contributions from the SVG text
        const match = html.match(/([\d,]+) contributions? in the last year/i);
        if (match && match[1]) {
          setTotalContributions(match[1]);
        }
      });
  }, [data]);
  // Handler to set black if contributions image fails to load
  const handleContribError = (e) => {
    if (contribColor !== "000000") {
      setContribColor("000000");
    }
  };

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch GitHub data");
        }
        return res.json();
      })
      .then((result) => {
        setData(result);
        // Fetch repos for language stats
        fetch(result.repos_url + '?per_page=100')
          .then((res) => res.json())
          .then((repos) => {
            const langCount = {};
            repos.forEach((repo) => {
              if (repo.language) {
                langCount[repo.language] = (langCount[repo.language] || 0) + 1;
              }
            });
            // Sort by count desc and take top 5
            const sorted = Object.entries(langCount)
              .sort((a, b) => b[1] - a[1])
              .slice(0, 5);
            setLanguages(sorted);
          });
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [username]);

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 16,
        mass: 0.7,
      },
    },
  };

  if (loading)
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="p-4 border rounded-lg shadow-md bg-gray-100 dark:bg-gray-800 w-80 text-center"
      >
        Loading GitHub status...
      </motion.div>
    );
  if (error)
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="p-4 border rounded-lg shadow-md bg-gray-100 dark:bg-gray-800 w-80 text-center text-red-500"
      >
        {error}
      </motion.div>
    );

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="p-4 border-2 border-blue-200 dark:border-blue-900 rounded-2xl shadow-xl bg-white dark:bg-gray-900 w-full max-w-2xl mx-auto text-center min-h-0 h-auto"
      style={{ minHeight: 0, height: 'auto', maxWidth: 600 }}
      whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(59,130,246,0.10)" }}
      transition={{ type: "spring", stiffness: 180, damping: 16 }}
    >
      <motion.img
        src={data.avatar_url}
        alt={data.login}
        className="w-20 h-20 mx-auto rounded-full border-4 border-blue-500 shadow-lg bg-white dark:bg-gray-800"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 16, delay: 0.1 }}
      />
  <h2 className="text-lg font-bold mt-4 text-gray-900 dark:text-white">{data.name}</h2>
  <p className="text-sm text-gray-600 dark:text-gray-400">@{data.login}</p>
  <p className="mt-2 text-sm text-gray-700 dark:text-gray-300">{data.bio}</p>

      {/* Languages Used */}
      {languages.length > 0 && (
        <div className="mb-6">
          <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">Top Languages</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {languages.map(([lang, count]) => (
              <span
                key={lang}
                className="px-2 py-0.5 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium"
              >
                {lang} <span className="text-[10px] text-gray-500">({count})</span>
              </span>
            ))}
          </div>
        </div>
      )}

      {/* GitHub Contributions Graph */}
  <div className="my-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 80, damping: 16 }}
        >
          <img
            src={`https://ghchart.rshah.org/${contribColor}/${data.login}`}
            alt="GitHub Contributions"
            className="w-full max-w-lg mx-auto rounded-lg border border-blue-200 dark:border-blue-900 bg-white dark:bg-gray-900"
            loading="lazy"
            style={{ minHeight: 40, maxHeight: 60, objectFit: 'cover' }}
            onError={handleContribError}
          />
        </motion.div>
  <p className="text-[10px] text-gray-500 mt-2">
          GitHub contributions in the last year
          {totalContributions && (
            <span className="block text-sm font-semibold text-green-600 dark:text-green-400 mt-1">
              Total: {totalContributions}
            </span>
          )}
        </p>
      </div>

      <div className="flex justify-around mt-6 mb-4 text-gray-700 dark:text-gray-300">
        <div>
          <p className="font-bold text-base">{data.public_repos}</p>
          <p className="text-xs">Repos</p>
        </div>
        <div>
          <p className="font-bold text-base">{data.followers}</p>
          <p className="text-xs">Followers</p>
        </div>
        <div>
          <p className="font-bold text-base">{data.following}</p>
          <p className="text-xs">Following</p>
        </div>
      </div>

      <motion.a
        href={data.html_url}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.08, backgroundColor: "#2563eb" }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
        className="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md"
      >
        View GitHub
      </motion.a>
    </motion.div>
  );
};

export default GitHubStatus;
