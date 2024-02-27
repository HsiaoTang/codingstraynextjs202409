'use client'

import { Progress } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const LoadingProgress = () => {
  const [loading, setLoading] = useState(true);
  const [pageLoadProgress, setPageLoadProgress] = useState(0);

  useEffect(() => {
    const handleLoad = () => {
      setLoading(false);
      setPageLoadProgress(100);
    };

    const handleProgress = (event: ProgressEvent) => {
      if (event.lengthComputable) {
        const percentComplete: number = (event.loaded / event.total) * 100;
        setPageLoadProgress(percentComplete);
      }
    };

    window.addEventListener("load", handleLoad);
    window.addEventListener("progress", handleProgress);

    return () => {
      window.removeEventListener("load", handleLoad);
      window.removeEventListener("progress", handleProgress);
    };
  }, []);

  return (loading &&
          <Progress 
            value={0}
            size='xs'
            bg='gray.600'
            colorScheme='green'
            position='fixed'
          />);
};

export default LoadingProgress;
