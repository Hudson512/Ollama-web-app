import express from 'express';
import { Ollama } from 'ollama';

const ollama = new Ollama({ host: 'http://127.0.0.1:11434' });
const router = express.Router();


// Middleware to validate request body
const validateChatRequest = (req, res, next) => {
    const { message } = req.body;
    if (!message || typeof message !== 'string' || message.trim().length === 0) {
        return res.status(400).json({
            error: 'Invalid request. Message is required and must be a non-empty string.'
        });
    }
    next();
};

router.post('/gemma2b', validateChatRequest, async (req, res) => {
    try {
        const { message } = req.body;

        const response = await ollama.chat({
            model: 'gemma:2b',
            messages: [{ 
                role: 'user', 
                content: message 
            }],
        });

        if (!response || !response.message) {
            throw new Error('Invalid response from Ollama');
        }

        res.status(200).json({
            success: true,
            data: {
                message: response.message.content,
                model: 'gemma:2b'
            }
        });

    } catch (error) {
        console.error("Ollama error:", error);
        res.status(500).json({
            success: false,
            error: 'Failed to process chat request',
            message: error.message
        });
    }
});

router.post('/deepseek-1.5b', validateChatRequest, async (req, res) => {
    try {
        const { message } = req.body;

        const response = await ollama.chat({
            model: 'deepseek-r1:1.5b',
            messages: [{ 
                role: 'user', 
                content: message 
            }],
        });

        if (!response || !response.message) {
            throw new Error('Invalid response from Ollama');
        }

        res.status(200).json({
            success: true,
            data: {
                message: response.message.content,
                model: 'deepseek-r1:1.5b'
            }
        });

    } catch (error) {
        console.error("Ollama error:", error);
        res.status(500).json({
            success: false,
            error: 'Failed to process chat request',
            message: error.message
        });
    }
});

// Optional: Add a health check endpoint
router.get('/health', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Chat service is running',
        timestamp: new Date().toISOString()
    });
});

export default router;