module.exports = {
    
    entry: [
        '@babel/polyfill',  // funcionalidades do Babel
        './src/main.js' // arquivo principal
    ],
    // para onde será enviado o código convertido para antes do ES6 como bundle.js
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
    },
    devServer: {
        contentBase: __dirname + '/public'
    },
    module: {
        // como deve se comportar quando usuário importar arquivos JS
        // qual loader utilizará (no nosso caso, Babel que manipula o conteúdo do arquivo)
        // toda vez que importar um novo arquivo JS, executará o babel sozinho naquele arquivo.
        // dessa forma não precisaremos do Babel executando em segundo plano
        rules: [
            {
                // regex entre // e \ para escapar o . e $ final da regex
                test: /\.js$/,
                // para o Babel não execute arquivos JS da pasta node_modules
                exclude: /node_modules/,
                // qual loader será usado
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    }
}