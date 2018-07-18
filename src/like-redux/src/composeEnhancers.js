const composeEnhancers = (...enhancers) => {
  if (enhancers.length === 0) {
    return (createStore) => createStore;
  }
  if (enhancers.length === 1) {
    return enhancers[0];
  }

  const lastEnhancer = enhancers[enhancers.length - 1];
  const otherEnhancers = enhancers.slice(0, -1);

  return (createStore) =>
    otherEnhancers.reduceRight(
      (previousEnhancer, currentEnhancer) => currentEnhancer(previousEnhancer),
      lastEnhancer(createStore)
    );
};

export default composeEnhancers;
