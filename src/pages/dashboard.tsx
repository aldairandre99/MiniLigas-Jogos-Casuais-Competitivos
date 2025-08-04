import Navbar  from "@/components/navbar";
export default function Dashboard() {

    return (
        <>
            <div className="flex flex-col h-screen">
                <Navbar />
                <main className="container mx-auto max-w-7xl px-6 flex flex-grow flex-col justify-between h-full overflow-x-hidden light:bg-[#F8FAFC]">
                    <h1>Dasboard</h1>
                    
                </main>
            </div>
        </>)
}
