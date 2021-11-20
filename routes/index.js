const express = require('express')

const router = express.Router()

router.get('/', (req,res) => {
    res.render('pages/index')
})

router.get(('/fnp'), (req,res) => {
    res.render('pages/fnp')
})

router.get(('/promo'), (req,res) => {
    res.render('pages/promo')
})

router.get(('/profile'), (req,res) => {
    res.render('pages/profile')
})

router.get(('/faq'), (req,res) => {
    res.render('pages/faq')
})

router.get('/', (req,res) => {
    res.render('pages/index')
})

router.get(('/topup'), (req,res) => {
    res.render('pages/topup')
})

router.get(('/withdrawal'), (req,res) => {
    res.render('pages/withdrawal')
})

router.get(('/pembayaran'), (req,res) => {
    res.render('pages/pembayaran')
})

router.get(('/paylater'), (req,res) => {
    res.render('pages/paylater')
})

router.get(('/transfer'), (req,res) => {
    res.render('pages/transfer')
})

router.get(('/premium'), (req,res) => {
    res.render('pages/premium')
})

router.get(('/redeemcode'), (req,res) => {
    res.render('pages/redeemcode')
})

router.get(('/trf_rek'), (req,res) => {
    res.render('pages/trf_rek')
})

router.get(('/trf_bank'), (req,res) => {
    res.render('pages/trf_bank')
})

router.get(('/premiumform'), (req,res) => {
    res.render('pages/premiumform')
})


module.exports = router;