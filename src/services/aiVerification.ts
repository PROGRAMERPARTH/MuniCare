export const verifyResolution = async (originalImageUrl: string, resolutionImageUrl: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        isResolved: true,
        similarityScore: 0.88, // similarity in context, e.g., same location
        issueFixedScore: 0.95, // AI confidence that the issue is actually fixed
        remarks: 'The pothole appears to have been successfully filled with asphalt.',
      });
    }, 2000);
  });
};
