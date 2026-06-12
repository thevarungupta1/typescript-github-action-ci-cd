import {config} from './config';
import { add, getWelcomeMessage } from './app';

console.log(`App Name: ${config.appName}`);
console.log(`App Environment: ${config.appEnv}`);
console.log(`API URL: ${config.apiUrl}`);

console.log(getWelcomeMessage('John Doe'));
console.log(`The sum of 5 and 10 is: ${add(5, 10)}`);