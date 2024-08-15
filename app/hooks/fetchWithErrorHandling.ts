export const fetchData = async <T>(url: string): Promise<T | null> => {
    try {
        const response = await fetch(url, {
            cache: 'no-store',
        });
        if (!response.ok) return null;
        return response.json();
    } catch (err) {
        //console.error('Fetch error:', err);
        return null;
    }
};