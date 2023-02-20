import { component$ } from '@builder.io/qwik';

export default component$(() => {
    const articles = [
        {
            title: 'Qwik.js',
            date: '15/02/2023'
        }
    ]

    return (
        <div>
            <h1>Lista de todos los articulos</h1>
            {articles.map(article => (
                <div>
                    <h2>{article.title}</h2>
                    <div>{article.date}</div>
                </div>
            ))}
        </div>
    );
})
