import { component$ } from '@builder.io/qwik';
import { useNavigate } from '@builder.io/qwik-city';

export default component$(() => {
    const nav = useNavigate();
    const articles = [
        {
            title: 'Qwik.js',
            date: '15/02/2023',
            link: 'qwik'
        },
        {
            title: 'Creacion de una webapp con Qwik',
            date: '16/02/2023',
            link: 'comenzando'
        }
    ]

    return (
        <div>
            <h1>Lista de todos los articulos</h1>
            {articles.map(article => (
                <div class="block rounded-lg shadow-lg hover:shadow-xl cursor-pointer bg-white p-4 mb-4" onClick$={() => nav(`/articles/${article.link}`)}>
                    <h2 class="text-xl font-bold">{article.title}</h2>
                    <p class="text-gray-500 text-sm">{article.date}</p>
                </div>
            ))}
        </div>
    );
})
