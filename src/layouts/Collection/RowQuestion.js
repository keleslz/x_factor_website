/**
 * @param items array
 * @return {JSX.Element}
 * @constructor
 */
const RowsQuestions = ({items}) => {
    return <>
        {items.map((item, i) => <div key={i}>
            <div  className="py-12">
                <h2 className="font-semibold text-xl mb-6">{item.title}</h2>
                <p>{item.content} </p>
            </div>

            <hr className="mt-6"/>
        </div>)}
    </>
}

export default RowsQuestions;
