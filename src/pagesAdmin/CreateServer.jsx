import BreadCrumbs from "../components/breadcrumb/BreadCrumbs";
import { TbArrowBack } from 'react-icons/tb';
import CircleButton from "../components/button/CircleButton";
import { Link } from 'react-router-dom';
import { Form, Formik } from 'formik';
import TextField from '../components/inputField/TextField';
import * as Yup from 'yup';
import PasswordField from '../components/inputField/PasswordField';
import { createServer } from "../services/serverServices";

// $table->id();
// $table->string('name');
// $table->string('password')->nullable();
// $table->unsignedBigInteger('idcreator');
// $table->text('description')->nullable();
// $table->string('findable');
// $table->string('joinable');
// $table->foreign('idcreator')->references('id')->on('users')->onDelete('cascade');
// $table->timestamps();
// $table->softDeletes();

const schemaYub = Yup.object().shape({
    name: Yup.string()
        .trim()
        .required('Hãy nhập tên máy chủ!')
});

const CreateServer = () => {

    const handleSubmit = async (values) => {
        const res = await createServer(values);
        console.log(res);
    }

    return (
        <div className='w-[800px] mx-auto bg-white p-10 rounded-[30px]'>
            <div>
                <BreadCrumbs>
                    <Link to='/admin/servers' className='hover:text-primary-purple'>
                        QUẢN LÝ MÁY CHỦ
                    </Link>
                    <span>THÊM MỚI</span>
                </BreadCrumbs>
                <div className='flex justify-between items-center'>
                    <h1 className='text-3xl text-dark-blue font-semibold mt-2'>
                        Thêm thể loại mới
                    </h1>
                    <CircleButton>
                        <Link to='/admin/servers' className='flex h-full w-full'>
                            <TbArrowBack className='text-dark-blue m-auto' size={24} />
                        </Link>
                    </CircleButton>
                </div>
            </div>
            <div className='pt-10 mx-auto'>
                <Formik
                    validationSchema={schemaYub}
                    initialValues={{
                        name: '',
                        description: '',
                        password: ''
                    }}
                    validateOnChange={false}
                    validateOnBlur={false}
                    onSubmit={handleSubmit}
                >
                    {({
                        values,
                        errors,
                        handleBlur,
                        handleChange,
                        isSubmitting,
                        touched
                    }) => (
                        <Form className='flex w-full flex-col gap-2'>
                            <TextField
                                label='Tên máy chủ'
                                name='name'
                                required
                                error={touched.name ? errors.name : ''}
                                value={values.name}
                                onChange={handleChange}
                                onBlur={(e) => {
                                    handleBlur(e);
                                }}
                                placeHolder='Nhập tên máy chủ'
                            />
                            <TextField
                                label='Mô tả máy chủ'
                                name='description'
                                required
                                error={touched.description ? errors.description : ''}
                                value={values.description}
                                onChange={handleChange}
                                onBlur={(e) => {
                                    handleBlur(e);
                                }}
                                placeHolder='Nhập mô tả máy chủ của bạn'
                            />
                            <PasswordField
                                label='Mật khẩu'
                                name='password'
                                required
                                error={touched.password ? errors.password : ''}
                                value={values.password}
                                onChange={handleChange}
                                onBlur={(e) => {
                                    handleBlur(e);
                                }}
                                placeHolder='Nhập mật khẩu'
                            />

                            <button
                                type='submit'
                                disabled={isSubmitting}
                                className='whitespace-nowrap mt-[20px] text-[16px] font-semibold py-[20px] bg-primary-purple rounded text-white'
                            >
                                Đăng ký
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}

export default CreateServer;