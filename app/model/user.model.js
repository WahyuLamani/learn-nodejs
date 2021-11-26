module.exports = (sqlize, DataTypes) => {
    return sqlize.define('user', {
        name: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        phone_number: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        }
    },
        {
            timestamps: true
        });
}

