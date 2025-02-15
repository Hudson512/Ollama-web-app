
const BASE_URL = 'http://localhost:3000/api/v1/chat';

async function testRoutes() {
    try {
        // Test health check
        console.log('\nTesting health check...');
        const healthResponse = await fetch(`${BASE_URL}/health`);
        console.log('Health Status:', healthResponse.status);
        if (healthResponse.ok) {
            console.log('Health Response:', await healthResponse.json());
        } else {
            console.log('Health Response Text:', await healthResponse.text());
        }

        // Test chat
        console.log('\nTesting chat...');
        const chatResponse = await fetch(`${BASE_URL}/gemma2b`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                message: 'Olá, como você está?'
            })
        });
        console.log('Chat Status:', chatResponse.status);
        if (chatResponse.ok) {
            console.log('Chat Response:', await chatResponse.json());
        } else {
            console.log('Chat Response Text:', await chatResponse.text());
        }

    } catch (error) {
        console.error('Error:', error);
    }
}

testRoutes();