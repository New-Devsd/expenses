
function FormattedDate({date = ''}) {

    const now = date ? new Date(date) : new Date()
    
    const formatter = new Intl.DateTimeFormat('en-IN', { year: '2-digit', month: '2-digit', day: '2-digit' })
    const formattedDate = formatter.format(now)

    return (
        <span className="text-italic">{formattedDate}</span>
    )
}

export default FormattedDate