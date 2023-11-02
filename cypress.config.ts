import { defineConfig } from 'cypress';

export default defineConfig({  

   component: {
      specPattern: 'src/**/*.test.{js,ts,jsx,tsx}',
      devServer: {
         framework: 'create-react-app',
         bundler: 'webpack',
      },
   },
});