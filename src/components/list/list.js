



import styles from"../classComponent/heading.module.css"

const List=(prop)=>{
    const {lists}=prop;
    console.log(lists);
    return(
        <ol>
            {/* <li className="head-text">flowers</li>
            <li>vegetables</li>
            <li className={styles.heading}>fruits</li> */}
{lists.map((each)=>{
   return <li>{each}</li>//here each represents object (it represent what we are taking)
}

)}
        </ol>
    )
}
export default List