import React from 'react';

type ProviderItem = [React.ComponentType<any>, Record<string, any>];

type CombinedProviderProps = {
  providers: ProviderItem[];
  children: React.ReactNode;
};

const CombinedProvider: React.FC<CombinedProviderProps> = ({ providers, children }) => {
  // 將所有的 Provider 包裹在一起
  const combinedProviders = providers.reduceRight((acc, [Provider, props]) => {
    return <Provider {...props}>{acc}</Provider>;
  }, children);

  return <>{combinedProviders}</>;
};

export default CombinedProvider;
