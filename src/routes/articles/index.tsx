import { component$ } from '@builder.io/qwik';
import { useLocation } from '@builder.io/qwik-city';

export default component$(() => {
    const location = useLocation();

    return (
        <div>
            <h1>Lista de todos los articulos</h1>
            <div>
                En construccion
            </div>
        </div>
    );
})
