const TemplateExpressions = () => {
    const name = "Jessika"
    const data = {
        age: 23,
        job: "Tester"
    }

    return(
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <p>Você atua como {data.job} :(</p>
            <p>{4 + 4}</p>
            <p>{console.log("JSX React")}</p>
        </div>
    )
}
export default TemplateExpressions