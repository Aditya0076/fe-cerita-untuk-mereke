import SideBar from "../../component/SideBar"

const HomePage = () => {

    return (
        <div className="flex h-screen">
            <div className="w-64">
                <SideBar/>
            </div>
            <div className="flex-1 p-6">
                <h1 className="text-3xl font-bold">Dashboard</h1>
            </div>
        </div>
    )
}

export default HomePage
