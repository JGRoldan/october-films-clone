import CardTeam from "./CardTeam";

const Story = () => {
    return ( 
        <div className="flex flex-col md:flex md:flex-row mt-10 mb-10 border-t-2 border-t-gray-100 pt-5">
            <div className="w-full md:w-1/4">
                <h2 className="text-left text-2xl md:p-2">OUR TEAM</h2>
            </div>
            <div className="w-full md:w-3/4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <CardTeam />
                </div>
            </div>
        </div>
     );
}
 
export default Story;