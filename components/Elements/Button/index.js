import Spinner from '../../Spinner'
export default function Button({loading, disabled, className, type, style, onClick, children}){
    return (
        <button className={className} type={type} disabled={loading || disabled} onClick={onClick} style={style}>
            { loading && <Spinner />  }{children}
        </button>
    )
}