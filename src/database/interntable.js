const mongoose = require('mongoose')

const schema1 = new mongoose.Schema(
    {
        _id: {
            type: String,
            required: true
        },
        Name: {
            type: String,
            required: true
        },
        Domain: {
            type: String,
            required: true
        },
        Skills: {
            type: [String]
          },
        Description:
        {
            type: String
        },
        Mail:
        {
            type: String,
            required: true
        },
        Course:
        {
             type: String,
        },
       Coursestatus:
       {
            type: String,
       }

    }
)
const internschema = mongoose.model("internschema", schema1);

const schema2 = new mongoose.Schema(
    {
        _id: {
            type: String,
            required: true
        },
        Name: {
            type: String,
            required: true
        },
        Password:
        {
            type: String,
            required: true
        },
        Role: {
            type: String,
            required: true
        }
    }
)

const loginschema = mongoose.model("loginschema", schema2);
// module.exports = mongoose.model('Inter', schema)
// module.exports = mongoose.model('Login', loginschema)

// const schema3 = new mongoose.Schema(
//     {
//         _id: {
//             type: String,
//             required: true
//         },
//         Course:
//         {
//            type: String,
//            required: true   
//         },
//         Status:
//         {
//            type: String,
//            required: true   
//         },
//     }
// )

// const courseschema = mongoose.model("courseschema", schema3);

module.exports =
{
    loginschema: loginschema,
    internschema: internschema,
}