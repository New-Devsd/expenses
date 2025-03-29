
export default function Currency({ money, style }) {

    const formatedMoney = {

    }
    return (
        <span className={style} >&#8377; {money.toFixed(2)}</span>
    )
}