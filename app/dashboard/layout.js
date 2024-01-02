export const metadata = {
    title: 'App1 | Dashboard',
    description: 'From NextJS 14 Udemy course by Mohamed Hajji',
};

export default function DashboardLayout({ children }) {
    return (
        <>
            <h1>Dashboard</h1>
            {children}
        </>
    );
}
