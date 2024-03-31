'use client'
export default function Page( { params } : { params: { slug: string } } ) {
    console.log(params)
    return (
        <div>
            <h1>{params.slug}</h1>
        </div>
    )
}