
import {
    banh_bao_chay,
    banh_bao_kim_sa,
    banh_bao_shang_hai,
    banh_bao_sua_trung,
    banh_bao_than_tre,
    banh_cuon_xa_xiu,
    bo_kho_hongkong,
    chan_ga,
    chao_cat_heo,
    chao_hai_san,
    chao_thap_cam,
    coca_1l5,
    coca_390ml,
    coke_330ml,
    coke_plus_300ml,
    coke_zero_330ml,
    com_chien_hai_san,
    com_vit_quay,
    com_xa_xiu,
    dau_hu_tay_cam,
    fanta_1l5,
    fanta_390ml,
    gio_heo,
    ha_cao_so_diep,
    ha_cao_thuy_tinh,
    hu_tieu_la_han,
    mi_hai_san,
    mi_kho_dau_hao,
    mi_xa_xiu,
    sa_te_hongkong,
    slide_1,
    slide_2,
    slide_3,
    slide_4,
    sprite_1l5,
    sprite_390ml,
    xiu_mai_gach_cua,

} from "../assets"
const navBar = [
    { title: "TRANG CHỦ", link: "" },
    { title: "SẢN PHẨM", link: "san-pham" },
    { title: "GIỚI THIỆU", link: "gioi-thieu" },
    { title: "LIÊN HỆ", link: "lien-he" },
]

const policy = [
    { title: "Giới thiệu", link: "gioi-thieu" },
    { title: "Chính sách đổi trả", link: "chinh-sach-doi-tra" },
    { title: "Chính sách bảo mật", link: "chinh-sach-bao-mat" },
    { title: "Điều khoản dịch vụ", link: "dieu-khoan-dich-vu" },
    { title: "Liên hệ", link: "lien-he" },
]

const main_topic = [
    { title: "Điểm tâm", link: "small_meals" },
    { title: "Cháo - Hủ tiếu - Mì", link: "noodles_meals" },
    { title: "Cơm", link: "rices" },
    { title: "Món chay", link: "vegetarian_meals" },
    { title: "Nước uống", link: "drinks" },
]

const small_meals = [
    {
        title: "Bánh Bao Kim Sa",
        description: `Bánh bao kim sa trứng muối là món ngon dễ làm, hương vị lại cực gây nghiện luôn, mỗi lần mình phải ăn tận 2 cái cơ.
Bánh kim sa có hương vị, màu sắc vô cùng đặc biệt, vỏ bánh nở mềm xốp, nhân kim sa tan chảy, ngọt mặn hòa hợp, béo ngậy, vàng óng ánh rất thích mắt.`,
        size: "Size lớn (5 cái)",
        image: banh_bao_kim_sa,
        price: "55.000",
    },
    {
        title: "Bánh Bao Súp Thượng Hải",
        description: `Bánh bao kim sa trứng muối là món ngon dễ làm, hương vị lại cực gây nghiện luôn, mỗi lần mình phải ăn tận 2 cái cơ.
Bánh kim sa có hương vị, màu sắc vô cùng đặc biệt, vỏ bánh nở mềm xốp, nhân kim sa tan chảy, ngọt mặn hòa hợp, béo ngậy, vàng óng ánh rất thích mắt.`,
        size: "Size lớn (5 cái)",
        image: banh_bao_shang_hai,
        price: "60.000",
    },
    {
        title: "Bánh Bao Sữa Trứng",
        description: `Bánh bao kim sa trứng muối là món ngon dễ làm, hương vị lại cực gây nghiện luôn, mỗi lần mình phải ăn tận 2 cái cơ.
Bánh kim sa có hương vị, màu sắc vô cùng đặc biệt, vỏ bánh nở mềm xốp, nhân kim sa tan chảy, ngọt mặn hòa hợp, béo ngậy, vàng óng ánh rất thích mắt.`,
        size: "Size lớn (5 cái)",
        image: banh_bao_sua_trung,
        price: "60.000",
    },
    {
        title: "Bánh Bao Than Tre Hắc Phượng Hoàng",
        description: `Bánh bao kim sa trứng muối là món ngon dễ làm, hương vị lại cực gây nghiện luôn, mỗi lần mình phải ăn tận 2 cái cơ.
Bánh kim sa có hương vị, màu sắc vô cùng đặc biệt, vỏ bánh nở mềm xốp, nhân kim sa tan chảy, ngọt mặn hòa hợp, béo ngậy, vàng óng ánh rất thích mắt.`,
        size: "Size lớn (5 cái)",
        image: banh_bao_than_tre,
        price: "62.000",
    },
    {
        title: "Bánh cuốn xá xíu",
        description: `Bánh bao kim sa trứng muối là món ngon dễ làm, hương vị lại cực gây nghiện luôn, mỗi lần mình phải ăn tận 2 cái cơ.
Bánh kim sa có hương vị, màu sắc vô cùng đặc biệt, vỏ bánh nở mềm xốp, nhân kim sa tan chảy, ngọt mặn hòa hợp, béo ngậy, vàng óng ánh rất thích mắt.`,
        size: "Size lớn (5 cái)",
        image: banh_cuon_xa_xiu,
        price: "54.000",
    },
    {
        title: "Chân Gà Tàu Xì",
        description: `Bánh bao kim sa trứng muối là món ngon dễ làm, hương vị lại cực gây nghiện luôn, mỗi lần mình phải ăn tận 2 cái cơ.
Bánh kim sa có hương vị, màu sắc vô cùng đặc biệt, vỏ bánh nở mềm xốp, nhân kim sa tan chảy, ngọt mặn hòa hợp, béo ngậy, vàng óng ánh rất thích mắt.`,
        size: "Size lớn (5 cái)",
        image: chan_ga,
        price: "64.000",
    },
    {
        title: "Há Cảo Sò Điệp",
        description: `Bánh bao kim sa trứng muối là món ngon dễ làm, hương vị lại cực gây nghiện luôn, mỗi lần mình phải ăn tận 2 cái cơ.
Bánh kim sa có hương vị, màu sắc vô cùng đặc biệt, vỏ bánh nở mềm xốp, nhân kim sa tan chảy, ngọt mặn hòa hợp, béo ngậy, vàng óng ánh rất thích mắt.`,
        size: "Size lớn (5 cái)",
        image: ha_cao_so_diep,
        price: "63.000",
    },
    {
        title: "Há Cảo Thủy Tinh",
        description: `Bánh bao kim sa trứng muối là món ngon dễ làm, hương vị lại cực gây nghiện luôn, mỗi lần mình phải ăn tận 2 cái cơ.
Bánh kim sa có hương vị, màu sắc vô cùng đặc biệt, vỏ bánh nở mềm xốp, nhân kim sa tan chảy, ngọt mặn hòa hợp, béo ngậy, vàng óng ánh rất thích mắt.`,
        size: "Size lớn (5 cái)",
        image: ha_cao_thuy_tinh,
        price: "58.000",
    },
    {
        title: "Xíu mại gạch cua",
        description: `Bánh bao kim sa trứng muối là món ngon dễ làm, hương vị lại cực gây nghiện luôn, mỗi lần mình phải ăn tận 2 cái cơ.
Bánh kim sa có hương vị, màu sắc vô cùng đặc biệt, vỏ bánh nở mềm xốp, nhân kim sa tan chảy, ngọt mặn hòa hợp, béo ngậy, vàng óng ánh rất thích mắt.`,
        size: "Size lớn (5 cái)",
        image: xiu_mai_gach_cua,
        price: "60.000",
    },
]

const noodles_meals = [
    {
        title: "Bò Kho HongKong",
        description: `Bánh bao kim sa trứng muối là món ngon dễ làm, hương vị lại cực gây nghiện luôn, mỗi lần mình phải ăn tận 2 cái cơ.
Bánh kim sa có hương vị, màu sắc vô cùng đặc biệt, vỏ bánh nở mềm xốp, nhân kim sa tan chảy, ngọt mặn hòa hợp, béo ngậy, vàng óng ánh rất thích mắt.`,
        size: "Size lớn (5 cái)",
        image: bo_kho_hongkong,
        price: "78.000",
    },
    {
        title: "Cháo cật heo",
        description: `Bánh bao kim sa trứng muối là món ngon dễ làm, hương vị lại cực gây nghiện luôn, mỗi lần mình phải ăn tận 2 cái cơ.
Bánh kim sa có hương vị, màu sắc vô cùng đặc biệt, vỏ bánh nở mềm xốp, nhân kim sa tan chảy, ngọt mặn hòa hợp, béo ngậy, vàng óng ánh rất thích mắt.`,
        size: "Size lớn (5 cái)",
        image: chao_cat_heo,
        price: "55.000",
    },
    {
        title: "Cháo Hải Sản",
        description: `Bánh bao kim sa trứng muối là món ngon dễ làm, hương vị lại cực gây nghiện luôn, mỗi lần mình phải ăn tận 2 cái cơ.
Bánh kim sa có hương vị, màu sắc vô cùng đặc biệt, vỏ bánh nở mềm xốp, nhân kim sa tan chảy, ngọt mặn hòa hợp, béo ngậy, vàng óng ánh rất thích mắt.`,
        size: "Size lớn (5 cái)",
        image: chao_hai_san,
        price: "74.000",
    },
    {
        title: "Cháo Thập Cẩm",
        description: `Bánh bao kim sa trứng muối là món ngon dễ làm, hương vị lại cực gây nghiện luôn, mỗi lần mình phải ăn tận 2 cái cơ.
Bánh kim sa có hương vị, màu sắc vô cùng đặc biệt, vỏ bánh nở mềm xốp, nhân kim sa tan chảy, ngọt mặn hòa hợp, béo ngậy, vàng óng ánh rất thích mắt.`,
        size: "Size lớn (5 cái)",
        image: chao_thap_cam,
        price: "72.000",
    },
    {
        title: "Giò Heo Chao Đỏ",
        description: `Bánh bao kim sa trứng muối là món ngon dễ làm, hương vị lại cực gây nghiện luôn, mỗi lần mình phải ăn tận 2 cái cơ.
Bánh kim sa có hương vị, màu sắc vô cùng đặc biệt, vỏ bánh nở mềm xốp, nhân kim sa tan chảy, ngọt mặn hòa hợp, béo ngậy, vàng óng ánh rất thích mắt.`,
        size: "Size lớn (5 cái)",
        image: gio_heo,
        price: "80.000",
    },
    {
        title: "Mì Hải Sản",
        description: `Bánh bao kim sa trứng muối là món ngon dễ làm, hương vị lại cực gây nghiện luôn, mỗi lần mình phải ăn tận 2 cái cơ.
Bánh kim sa có hương vị, màu sắc vô cùng đặc biệt, vỏ bánh nở mềm xốp, nhân kim sa tan chảy, ngọt mặn hòa hợp, béo ngậy, vàng óng ánh rất thích mắt.`,
        size: "Size lớn (5 cái)",
        image: mi_hai_san,
        price: "84.000",
    },
    {
        title: "Mì Khô Dầu Hào Xá Xíu",
        description: `Bánh bao kim sa trứng muối là món ngon dễ làm, hương vị lại cực gây nghiện luôn, mỗi lần mình phải ăn tận 2 cái cơ.
Bánh kim sa có hương vị, màu sắc vô cùng đặc biệt, vỏ bánh nở mềm xốp, nhân kim sa tan chảy, ngọt mặn hòa hợp, béo ngậy, vàng óng ánh rất thích mắt.`,
        size: "Size lớn (5 cái)",
        image: mi_kho_dau_hao,
        price: "78.000",
    },
    {
        title: "Mì Xá Xíu",
        description: `Bánh bao kim sa trứng muối là món ngon dễ làm, hương vị lại cực gây nghiện luôn, mỗi lần mình phải ăn tận 2 cái cơ.
Bánh kim sa có hương vị, màu sắc vô cùng đặc biệt, vỏ bánh nở mềm xốp, nhân kim sa tan chảy, ngọt mặn hòa hợp, béo ngậy, vàng óng ánh rất thích mắt.`,
        size: "Size lớn (5 cái)",
        image: mi_xa_xiu,
        price: "76.000",
    },
    {
        title: "Sa Tế HongKong",
        description: `Bánh bao kim sa trứng muối là món ngon dễ làm, hương vị lại cực gây nghiện luôn, mỗi lần mình phải ăn tận 2 cái cơ.
Bánh kim sa có hương vị, màu sắc vô cùng đặc biệt, vỏ bánh nở mềm xốp, nhân kim sa tan chảy, ngọt mặn hòa hợp, béo ngậy, vàng óng ánh rất thích mắt.`,
        size: "Size lớn (5 cái)",
        image: sa_te_hongkong,
        price: "72.000",
    },
]

const rice_meals = [
    {
        title: "Cơm Chiên Hải Sản Sò Điệp",
        description: `Bánh bao kim sa trứng muối là món ngon dễ làm, hương vị lại cực gây nghiện luôn, mỗi lần mình phải ăn tận 2 cái cơ.
Bánh kim sa có hương vị, màu sắc vô cùng đặc biệt, vỏ bánh nở mềm xốp, nhân kim sa tan chảy, ngọt mặn hòa hợp, béo ngậy, vàng óng ánh rất thích mắt.`,
        size: "Size lớn (5 cái)",
        image: com_chien_hai_san,
        price: "118.000",
    },
    {
        title: "Cơm Vịt Quay",
        description: `Bánh bao kim sa trứng muối là món ngon dễ làm, hương vị lại cực gây nghiện luôn, mỗi lần mình phải ăn tận 2 cái cơ.
Bánh kim sa có hương vị, màu sắc vô cùng đặc biệt, vỏ bánh nở mềm xốp, nhân kim sa tan chảy, ngọt mặn hòa hợp, béo ngậy, vàng óng ánh rất thích mắt.`,
        size: "Size lớn (5 cái)",
        image: com_vit_quay,
        price: "90.000",
    },
    {
        title: "Cơm Xá Xíu",
        description: `Bánh bao kim sa trứng muối là món ngon dễ làm, hương vị lại cực gây nghiện luôn, mỗi lần mình phải ăn tận 2 cái cơ.
Bánh kim sa có hương vị, màu sắc vô cùng đặc biệt, vỏ bánh nở mềm xốp, nhân kim sa tan chảy, ngọt mặn hòa hợp, béo ngậy, vàng óng ánh rất thích mắt.`,
        size: "Size lớn (5 cái)",
        image: com_xa_xiu,
        price: "94.000",
    },
]

const vegetarian_meals = [
    {
        title: "Bánh Bao Chay Thập Cẩm",
        description: `Bánh bao kim sa trứng muối là món ngon dễ làm, hương vị lại cực gây nghiện luôn, mỗi lần mình phải ăn tận 2 cái cơ.
Bánh kim sa có hương vị, màu sắc vô cùng đặc biệt, vỏ bánh nở mềm xốp, nhân kim sa tan chảy, ngọt mặn hòa hợp, béo ngậy, vàng óng ánh rất thích mắt.`,
        size: "Size lớn (5 cái)",
        image: banh_bao_chay,
        price: "29.000",
    },
    {
        title: "Đậu Hủ Tay Cầm",
        description: `Bánh bao kim sa trứng muối là món ngon dễ làm, hương vị lại cực gây nghiện luôn, mỗi lần mình phải ăn tận 2 cái cơ.
Bánh kim sa có hương vị, màu sắc vô cùng đặc biệt, vỏ bánh nở mềm xốp, nhân kim sa tan chảy, ngọt mặn hòa hợp, béo ngậy, vàng óng ánh rất thích mắt.`,
        size: "Size lớn (5 cái)",
        image: dau_hu_tay_cam,
        price: "88.000",
    },
    {
        title: "Hủ Tiếu La Hán",
        description: `Bánh bao kim sa trứng muối là món ngon dễ làm, hương vị lại cực gây nghiện luôn, mỗi lần mình phải ăn tận 2 cái cơ.
Bánh kim sa có hương vị, màu sắc vô cùng đặc biệt, vỏ bánh nở mềm xốp, nhân kim sa tan chảy, ngọt mặn hòa hợp, béo ngậy, vàng óng ánh rất thích mắt.`,
        size: "Size lớn (5 cái)",
        image: hu_tieu_la_han,
        price: "108.000",
    },
]

const drinks = [
    {
        title: "Chai Coca 1.5L",
        description: `Bánh bao kim sa trứng muối là món ngon dễ làm, hương vị lại cực gây nghiện luôn, mỗi lần mình phải ăn tận 2 cái cơ.
Bánh kim sa có hương vị, màu sắc vô cùng đặc biệt, vỏ bánh nở mềm xốp, nhân kim sa tan chảy, ngọt mặn hòa hợp, béo ngậy, vàng óng ánh rất thích mắt.`,
        size: "Size lớn (5 cái)",
        image: coca_1l5,
        price: "39.000",
    },
    {
        title: "Chai Coca 390ML",
        description: `Bánh bao kim sa trứng muối là món ngon dễ làm, hương vị lại cực gây nghiện luôn, mỗi lần mình phải ăn tận 2 cái cơ.
Bánh kim sa có hương vị, màu sắc vô cùng đặc biệt, vỏ bánh nở mềm xốp, nhân kim sa tan chảy, ngọt mặn hòa hợp, béo ngậy, vàng óng ánh rất thích mắt.`,
        size: "Size lớn (5 cái)",
        image: coca_390ml,
        price: "20.000",
    },
    {
        title: "Chai Fanta 1.5L",
        description: `Bánh bao kim sa trứng muối là món ngon dễ làm, hương vị lại cực gây nghiện luôn, mỗi lần mình phải ăn tận 2 cái cơ.
Bánh kim sa có hương vị, màu sắc vô cùng đặc biệt, vỏ bánh nở mềm xốp, nhân kim sa tan chảy, ngọt mặn hòa hợp, béo ngậy, vàng óng ánh rất thích mắt.`,
        size: "Size lớn (5 cái)",
        image: fanta_1l5,
        price: "39.000",
    },
    {
        title: "Chai Fanta 390ML",
        description: `Bánh bao kim sa trứng muối là món ngon dễ làm, hương vị lại cực gây nghiện luôn, mỗi lần mình phải ăn tận 2 cái cơ.
Bánh kim sa có hương vị, màu sắc vô cùng đặc biệt, vỏ bánh nở mềm xốp, nhân kim sa tan chảy, ngọt mặn hòa hợp, béo ngậy, vàng óng ánh rất thích mắt.`,
        size: "Size lớn (5 cái)",
        image: fanta_390ml,
        price: "20.000",
    },
    {
        title: "Chai Sprite 1.5L",
        description: `Bánh bao kim sa trứng muối là món ngon dễ làm, hương vị lại cực gây nghiện luôn, mỗi lần mình phải ăn tận 2 cái cơ.
Bánh kim sa có hương vị, màu sắc vô cùng đặc biệt, vỏ bánh nở mềm xốp, nhân kim sa tan chảy, ngọt mặn hòa hợp, béo ngậy, vàng óng ánh rất thích mắt.`,
        size: "Size lớn (5 cái)",
        image: sprite_1l5,
        price: "39.000",
    },
    {
        title: "Chai Sprite 390ML",
        description: `Bánh bao kim sa trứng muối là món ngon dễ làm, hương vị lại cực gây nghiện luôn, mỗi lần mình phải ăn tận 2 cái cơ.
Bánh kim sa có hương vị, màu sắc vô cùng đặc biệt, vỏ bánh nở mềm xốp, nhân kim sa tan chảy, ngọt mặn hòa hợp, béo ngậy, vàng óng ánh rất thích mắt.`,
        size: "Size lớn (5 cái)",
        image: sprite_390ml,
        price: "20.000",
    },
    {
        title: "Coke 330ML",
        description: `Bánh bao kim sa trứng muối là món ngon dễ làm, hương vị lại cực gây nghiện luôn, mỗi lần mình phải ăn tận 2 cái cơ.
Bánh kim sa có hương vị, màu sắc vô cùng đặc biệt, vỏ bánh nở mềm xốp, nhân kim sa tan chảy, ngọt mặn hòa hợp, béo ngậy, vàng óng ánh rất thích mắt.`,
        size: "Size lớn (5 cái)",
        image: coke_330ml,
        price: "12.000",
    },
    {
        title: "Coke Plus 330ML",
        description: `Bánh bao kim sa trứng muối là món ngon dễ làm, hương vị lại cực gây nghiện luôn, mỗi lần mình phải ăn tận 2 cái cơ.
Bánh kim sa có hương vị, màu sắc vô cùng đặc biệt, vỏ bánh nở mềm xốp, nhân kim sa tan chảy, ngọt mặn hòa hợp, béo ngậy, vàng óng ánh rất thích mắt.`,
        size: "Size lớn (5 cái)",
        image: coke_plus_300ml,
        price: "25.000",
    },
    {
        title: "Coke Zero 330ML",
        description: `Bánh bao kim sa trứng muối là món ngon dễ làm, hương vị lại cực gây nghiện luôn, mỗi lần mình phải ăn tận 2 cái cơ.
Bánh kim sa có hương vị, màu sắc vô cùng đặc biệt, vỏ bánh nở mềm xốp, nhân kim sa tan chảy, ngọt mặn hòa hợp, béo ngậy, vàng óng ánh rất thích mắt.`,
        size: "Size lớn (5 cái)",
        image: coke_zero_330ml,
        price: "20.000",
    },
]

const slide_imgs = [
    { image: slide_1, link: "san-pham" },
    { image: slide_2, link: "san-pham" },
    { image: slide_3, link: "san-pham" },
    { image: slide_4, link: "san-pham" },
]

export { navBar, main_topic, small_meals, noodles_meals, vegetarian_meals, rice_meals, drinks, slide_imgs, policy };