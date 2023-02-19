import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';

export default component$(() => {
    const articles = [
        {
            title: 'Qwik.js',
            date: '15/02/2023'
        }
    ]
    const location = useLocation();

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
