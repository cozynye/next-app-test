function Error({ statusCode }) {
    console.log('statusCode')
    console.log(statusCode)
    return (
        <p>
            {statusCode
                ? <h1>An error ${statusCode} occurred on server </h1>
                : <h1>An error occurred on client </h1>}
        </p>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error