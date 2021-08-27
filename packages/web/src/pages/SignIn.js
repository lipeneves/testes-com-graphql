import React from 'react';

export default function SignIn() {
    return (
        <form action="/authenticate" method="POST">
            <fildset>
                <label for="email">E-mail</label>
                <input type="email" id="email" name="email" inputmode="email" autocomplete="username" />
            </fildset>

            <fildset>
                <label for="password">Senha</label>
                <input type="password" id="password" name="password" autocomplete="current-password" />
            </fildset>
        </form>
    );
}