const Story = () => {
    return ( 
        <div className="flex flex-col md:flex md:flex-row border-t-2 border-t-gray-100 pt-5">
            <div className="w-full md:w-1/4">
                <h2 className="text-left text-2xl md:p-2">THE STORY</h2>
            </div>
            <div className="w-full md:w-3/4">
                <p className="text-lg"> Founded in London in 1989, October is one of the most dynamic, imaginative and respected brands in the documentary sector.<br/><br/>
                    Truly independent and employee-owned, with offices in London, Los Angeles and New York, and a burgeoning regional studio facility in the UK, October harnesses an unrivalled community of producers and partners.<br/><br/>
                    Our passion for storytelling and commitment to excellence have been recognised with over 100 prestige awards, including EMMY, Prix Italia and BAFTA.
                </p>
            </div>
        </div>
     );
}
 
export default Story;