const express =  require('express');
const app = express();
const userRoutes = require('./routes/user');

app.use(express.json());
app.use('/api',userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});