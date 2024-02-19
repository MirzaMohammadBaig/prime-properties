import SortableTable from "../components/SortableTable";
import Table from "../components/Table";

function TablePage(){
    const data = [
        {name: 'Orange', color: 'bg-orange-400', score: 5},
        {name: 'Apple', color: 'bg-red-500', score: 3},
        {name: 'Banana', color: 'bg-yellow-300', score: 1},
        {name: 'Lime', color: 'bg-green-200', score: 4},
        {name: 'Cherry', color: 'bg-red-700', score: 2},
    ];

    const config = [
        { 
            label: 'Name', 
            render: (fruit) => fruit.name,
            sortValue: (fruit) => fruit.name
        },
        {  
            label: 'Color', 
            render: (fruit) => <div className={`p-3 m-3 ${fruit.color}`}></div> 
        },
        { 
            label: 'Score', 
            render: (fruit) => fruit.score ,
            sortValue: (fruit) => fruit.score,
        },
        { 
            label: 'Score Square', 
            render: (fruit) => fruit.score**2 ,
        },
    ];

    const keyFn = (fruit) => fruit.name;

    return (
        <div className="flex flex-wrap">
            <SortableTable data = {data} config={config} keyFn={keyFn} />
            <Table data = {data} config={config} keyFn={keyFn} />
        </div>
    );
}

export default TablePage;