import Footer from "../(main)/components/Footer";



export default function HomeLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
        </>
    );
}