export const submitInquiry = async (formData) => {
    const API_URL = import.meta.env.VITE_API_URL || 'https://weaec-backend.onrender.com';
    try {
        const response = await fetch(`${API_URL}/api/inquiry`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error("Inquiry submission failed:", error);
        throw error;
    }
};
