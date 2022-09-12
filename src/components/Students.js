function Students (props) {
    return (
        <>
            <h3>I am {props.name}</h3>
            <p>{props.role ? props.role : " No role "}</p>
        </>
    )
}

export default Students;

