import { analyzeComplaintText } from './geminiService';
import { analyzeImage } from './visionService';

export const processNewComplaint = async (text: string, imageUrl?: string) => {
  let imageAnalysis = null;
  if (imageUrl) {
    imageAnalysis = await analyzeImage(imageUrl);
  }
  
  const textAnalysis = (await analyzeComplaintText(text)) as any;

  return {
    combinedPriority: textAnalysis.priority,
    suggestedDepartment: textAnalysis.department,
    confidence: imageAnalysis ? imageAnalysis.confidence : 0.85,
    autoRoute: true,
  };
};
