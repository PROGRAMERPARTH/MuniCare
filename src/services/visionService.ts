// Mock Cloud Vision AI Service
export const analyzeImage = async (imageUrl: string) => {
  console.log('Sending image to Cloud Vision:', imageUrl);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        labels: ['road', 'damage', 'pothole', 'asphalt'],
        confidence: 0.94,
        isSafeContent: true,
        detectedSeverity: 'high'
      });
    }, 1500);
  });
};
