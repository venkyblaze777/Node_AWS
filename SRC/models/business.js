module.exports = (sequlize , DataTypes) => {
    const Business = sequlize.define('business', {
        id:{
            type: DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true
        },
        title : {
            type: DataTypes.STRING,
            allowNull : false
        },
        description :{
            type: DataTypes.TEXT,
            allowNull : false
        },
        createdAt :{
            type : DataTypes.DATE,
            allowNull : false
        },
        updatedAt :DataTypes.DATE,
        

    });

    return Business;

};