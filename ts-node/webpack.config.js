const path = require('path');

module.exports = {
    // 1. Configuración de entrada
    entry: './src/index.ts',
    
    // 2. Herramienta de mapeo de fuente
    devtool: 'inline-source-map',
    
    // 3. Reglas de módulos y loaders
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    
    // 4. Extensiones a resolver
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ]
    },
    
    // 5. Configuración de salida
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    
    // 6. Configuración del servidor de desarrollo (devServer)
    devServer: {
        port: 8081,
        open: true,
        hot: true,
        static: path.resolve(__dirname, 'dist'), // Importante: desde dónde servir archivos estáticos
    },

    // 7. Modo (puedes quitarlo del script si lo añades aquí)
    mode: 'development' 
};