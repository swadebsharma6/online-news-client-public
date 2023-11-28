import useView from "../../hooks/useView";


const DashBoardPage = () => {

    const [views] = useView();
    console.log(views)

    return (
        <div>
            This is DashBoard Page: {views.length}
        </div>
    );
};

export default DashBoardPage;