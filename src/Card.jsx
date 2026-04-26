import React from "react";   pahaltiwari17  seraphicspirit8650@gmail.com  https://github.com/pahaltiwari17/Dev-Productivity-Dashboard

const Card = ({ dev }) => {
  const insights = [];

  if (dev.leadTime > 4) {
    insights.push("Lead time is slightly high → delivery can be faster.");
  } else {
    insights.push("Lead time is good → fast delivery.");
  }

  if (dev.cycleTime > 4) {
    insights.push("Cycle time is high → tasks are taking longer.");
  } else {
    insights.push("Cycle time is healthy.");
  }

  if (dev.prCount >= 4) {
    insights.push("PR Throughput is good -> consistent development activity.");
  } else {
    insights.push(
      "PR Throughput is low -> development activity may be limited"
    );
  }

  if (dev.bugRate > 0) {
    insights.push("Bug rate present → quality needs improvement.");
  } else {
    insights.push("No bugs → strong code quality.");
  }

  if (dev.totalDeployments >= 4) {
    insights.push("Deployment Frequency is good → releases are happening regularly.");
  } else {
    insights.push("Deployment Frequency is low → releases are less frequent.");
  }

  const suggestions = [];

  if (dev.leadTime > 4) {
    suggestions.push("To speed up delivery- Reduce PR size.");
  }

  if (dev.cycleTime > 4) {
    suggestions.push("To reduce cycle time- Break tasks into smaller parts, this will reduce complexity.");
  }

  if (dev.prCount < 4) {
    suggestions.push("Break code work into smaller PRs for faster merging.");
  }

  if (dev.bugRate > 0) {
    suggestions.push("To reduce bug rate- Improve testing and QA before deployment."
    );
  }
  if (dev.totalDeployments < 4) {
    suggestions.push("To increase deployment frequency- Adopt smaller and more frequent releases instead of branching large changes at once. You can try deploying small fixes rather than solving a big bug all together."
    );
  }


  if (suggestions.length === 0) {
    suggestions.push("Performance looks good. Keep maintaining this quality.");
  }

  return (
    <div style={{ border: "1px solid #ccc", padding: "15px", margin: "10px" }}>
      <h2>{dev.name}</h2>
      <p>
        <b>Manager:</b> {dev.manager}
      </p>

      <h4>Metrics</h4>
      <p>Lead Time: {dev.leadTime} days</p>
      <p>Cycle Time: {dev.cycleTime} days</p>
      <p>Bug Rate: {dev.bugRate}</p>
      <p>PR Throughput: {dev.prCount}</p>
      <p>Deployment Frequency: {dev.totalDeployments}</p>

      <h4>Insights</h4>
      <ul>
        {insights.map((i, index) => (
          <li key={index}>{i}</li>
        ))}
      </ul>

      <h4>Suggestions</h4>
      <ul>
        {suggestions.map((s, index) => (
          <li key={index}>{s}</li>
        ))}
      </ul>
    </div>
  );
};

export default Card;
