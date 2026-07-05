// Mock Gemini AI Service
export const analyzeComplaintText = async (text: string) => {
  console.log('Sending text to Gemini:', text);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        category: 'infrastructure',
        priority: 'high',
        department: 'Roads & Works',
        sentiment: 'frustrated',
        extractedEntities: ['pothole', 'Koramangala'],
      });
    }, 1000);
  });
};

export const generateAutomatedResponse = async (complaintId: string) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('We have received your complaint regarding the road issue. A field officer has been assigned and will inspect the site within 24 hours.');
    }, 800);
  });
};
