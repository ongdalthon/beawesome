const PRODUCT_TB_MODEL = (sequelize, DataTypes) => {
  const PRODUCT_TB = sequelize.define(
    'PRODUCT_TB',
    {
      PR_ID_PK: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      PR_NAME: {
        type: DataTypes.STRING(60),
        unique: true,
        allowNull: false,
      },
      PR_COMPANY: {
        type: DataTypes.STRING(60),
        allowNull: true,
      },
      PR_TAG: {
        type: DataTypes.TEXT,
        allowNull: true,
        get() {
          return JSON.parse(this.getDataValue('PR_TAG'))
        },
        set(value) {
          return this.setDataValue('PR_TAG', JSON.stringify(value))
        },
      },
      PR_SALES: {
        type: DataTypes.TEXT,
        allowNull: false,
        get() {
          return JSON.parse(this.getDataValue('PR_SALES'))
        },
        set(value) {
          return this.setDataValue('PR_SALES', JSON.stringify(value))
        },
      },
      PR_PARING: {
        type: DataTypes.JSON,
        allowNull: true,
        get() {
          return JSON.parse(this.getDataValue('PR_PARING'))
        },
        set(value) {
          return this.setDataValue('PR_PARING', JSON.stringify(value))
        },
      },
      PR_DES: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      PR_BARCODE: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      PR_DT: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      PR_UPDATE: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      PR_C_COUNT: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      PR_ALC: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      PR_NON: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      PR_IMAGE: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      PR_PRICE: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
      tableName: 'PRODUCT_TB',
    }
  )
  return PRODUCT_TB
}
export default PRODUCT_TB_MODEL
