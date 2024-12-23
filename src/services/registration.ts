export type IPRType = 'patent' | 'trademark' | 'copyright';

export const registerIPR = async (
  propertyname: string,
  description: string,
  ownerId: string,
  iprType: IPRType
): Promise<{ success: boolean; error?: string }> => {
  try {
    // Simulate API call to register IPR
    await new Promise((resolve) => setTimeout(resolve, 500)); // Simulate delay

    // Log the registration details
    console.log(`Registered IPR:`, { propertyname, description, ownerId, iprType });

    return { success: true };
  } catch (error) {
    console.error("Error registering IPR:", error);
    return { success: false, error: "Failed to register IPR" };
  }
};

