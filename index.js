const { server: app } = require('./server');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`application running on port ${PORT}`);
})