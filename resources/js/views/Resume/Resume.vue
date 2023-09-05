<template>
  <div class="bg-white">
    <div class="card">
        <div class="card-body">
            <div class="container mt-3">
                <div class="text-center">
                    <TinyMCEEditor :inlineEditor="inlineEditor" :modelValue="service" />
                </div>
                <!-- service -->
                <div class="row mt-5 mb-5">
                    <div class="col-md-6">
                        <div class="card">
                            <div class="card-body text-center">
                                <div class="elementskit-info-box-icon" style="border-radius: 50%;  width: 100px;height: 100px;line-height: 100px;margin: 0 auto; margin-top: 0px;   margin-top: 40px;">
                                    <i class="bi bi-gem" style="font-size: 50px !important;"></i>
                                </div>
                                <TinyMCEEditor :inlineEditor="inlineEditor" :modelValue="service" />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="card" style="min-height: 100px; background-color: #5d70d6 !important; color: white; !important">
                            <div class="card-body text-center">
                                <div class="elementskit-info-box-icon" style="border-radius: 50%; background-color: #7daee4; color: white; width: 100px;height: 100px;line-height: 100px;margin: 0 auto; margin-top: 0px;   margin-top: 40px;">
                                    <i class="bi bi-gem" style="font-size: 50px !important;"></i>
                                </div>
                                <TinyMCEEditor :inlineEditor="inlineEditor" :modelValue="service" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="ekit-wid-con mb-5">
                <div class="elementskit-border-divider"></div>
            </div>
            <!-- penjelasan singkat -->
            <div class="row mb-2">
                <div class="col-md-6" style="text-align: left !important;">
                    <TinyMCEEditor :inlineEditor="inlineEditor" :modelValue="service" />
                </div>
                <div class="col-md-6">
                    <img decoding="async" src="https://anaslawoffice.dakreativ.com/wp-content/uploads/2023/07/left_image.png" title="left_image.png" alt="left_image.png" loading="lazy" >
                </div>
            </div> 
            <!-- BENEFIT -->
            <div class="text-center">
                <TinyMCEEditor :inlineEditor="inlineEditor" :modelValue="service" />
            </div>
            <div class="row"> 
                <div class="col-md-6">
                    <div class="d-flex">
                        <div class="col-4">
                            <div class="elementskit-info-box-icon" style="border-radius: 50%; color: rgb(255, 255, 255); -webkit-text-stroke: 2px rgb(125, 174, 228); width: 100px; height: 100px; line-height: 100px;  text-align: center;margin-left:40px"><i class="bi bi-stack" style="font-size: 50px !important; "></i></div>
                        </div>
                        <div class="col-8">
                            <TinyMCEEditor :inlineEditor="inlineEditor" :modelValue="service" />
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="d-flex">
                        <div class="col-4">
                            <div class="elementskit-info-box-icon" style="border-radius: 50%; color: rgb(255, 255, 255); -webkit-text-stroke: 2px rgb(125, 174, 228); width: 100px; height: 100px; line-height: 100px;  text-align: center;margin-left:40px"><i class="bi bi-stack" style="font-size: 50px !important; "></i></div>
                        </div>
                        <div class="col-8">
                            <TinyMCEEditor :inlineEditor="inlineEditor" :modelValue="service" />
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="d-flex">
                        <div class="col-4">
                            <div class="elementskit-info-box-icon" style="border-radius: 50%; color: rgb(255, 255, 255); -webkit-text-stroke: 2px rgb(125, 174, 228); width: 100px; height: 100px; line-height: 100px;  text-align: center;margin-left:40px"><i class="bi bi-stack" style="font-size: 50px !important; "></i></div>
                        </div>
                        <div class="col-8">
                            <TinyMCEEditor :inlineEditor="inlineEditor" :modelValue="service" />
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="d-flex">
                        <div class="col-4">
                            <div class="elementskit-info-box-icon" style="border-radius: 50%; color: rgb(255, 255, 255); -webkit-text-stroke: 2px rgb(125, 174, 228); width: 100px; height: 100px; line-height: 100px;  text-align: center;margin-left:40px"><i class="bi bi-stack" style="font-size: 50px !important; "></i></div>
                        </div>
                        <div class="col-8">
                            <TinyMCEEditor :inlineEditor="inlineEditor" :modelValue="service" />
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="d-flex">
                        <div class="col-4">
                            <div class="elementskit-info-box-icon" style="border-radius: 50%; color: rgb(255, 255, 255); -webkit-text-stroke: 2px rgb(125, 174, 228); width: 100px; height: 100px; line-height: 100px;  text-align: center;margin-left:40px"><i class="bi bi-stack" style="font-size: 50px !important; "></i></div>
                        </div>
                        <div class="col-8">
                            <TinyMCEEditor :inlineEditor="inlineEditor" :modelValue="service" />
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="d-flex">
                        <div class="col-4">
                            <div class="elementskit-info-box-icon" style="border-radius: 50%; color: rgb(255, 255, 255); -webkit-text-stroke: 2px rgb(125, 174, 228); width: 100px; height: 100px; line-height: 100px;  text-align: center;margin-left:40px"><i class="bi bi-stack" style="font-size: 50px !important; "></i></div>
                        </div>
                        <div class="col-8">
                            <TinyMCEEditor :inlineEditor="inlineEditor" :modelValue="service" />
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="d-flex">
                        <div class="col-4">
                            <div class="elementskit-info-box-icon" style="border-radius: 50%; color: rgb(255, 255, 255); -webkit-text-stroke: 2px rgb(125, 174, 228); width: 100px; height: 100px; line-height: 100px;  text-align: center;margin-left:40px"><i class="bi bi-stack" style="font-size: 50px !important; "></i></div>
                        </div>
                        <div class="col-8">
                            <TinyMCEEditor :inlineEditor="inlineEditor" :modelValue="service" />
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="d-flex">
                        <div class="col-4">
                            <div class="elementskit-info-box-icon" style="border-radius: 50%; color: rgb(255, 255, 255); -webkit-text-stroke: 2px rgb(125, 174, 228); width: 100px; height: 100px; line-height: 100px;  text-align: center;margin-left:40px"><i class="bi bi-stack" style="font-size: 50px !important; "></i></div>
                        </div>
                        <div class="col-8">
                            <TinyMCEEditor :inlineEditor="inlineEditor" :modelValue="service" />
                        </div>
                    </div>
                </div>
            </div>
            <!-- PRICELIST -->

            <div class="container mt-3">
                <div class="text-center">
                    <TinyMCEEditor :inlineEditor="inlineEditor" :modelValue="service" />
                </div>
                <!-- service -->
                <div class="row mt-5 mb-5">
                    <div class="col-md-4">
                        <div class="card" style="border: 0.5px groove #0000001c;">
                            <div class="card-body text-center" style="min-height: 470px !important;  padding: 10%;">
                                
                                <h3>Starter</h3>
                                <div class="mt-2 mb-4 elementskit-info-box-icon" style=" background: #a276ff; color:white;border-radius: 48px 48px 48px 48px; color: black;padding:15px;color: white; font-weight:bold;">
                                    <h2>
                                        $ 5.99 Month 
                                    </h2>
                                </div>
                                <TinyMCEEditor :inlineEditor="inlineEditor" :modelValue="service" />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card" style="min-height: 100px; background-color: #a276ff !important; color: white; !important">
                            <div class="card-body text-center" style="min-height: 470px !important; padding: 10%;">
                                <h3>Basic</h3>
                                <div class="mt-2 mb-4 elementskit-info-box-icon" style="background-color: transparent;background-image: linear-gradient(-35deg, #ffffff 0%, #ffffff 100%);border-color: rgba(0,0,0,0);border-radius: 48px 48px 48px 48px; color: black;padding:15px; font-weight:bold;">
                                    <h2>
                                        $ 5.99 Month 
                                    </h2>
                                </div>
                                <TinyMCEEditor :inlineEditor="inlineEditor" :modelValue="service" />
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card" style="border: 0.5px groove #0000001c;">
                            <div class="card-body text-center" style="min-height: 470px !important;  padding: 10%;">
                                <h3>Pro</h3>
                                <div class="mt-2 mb-4 elementskit-info-box-icon" style=" background: #a276ff; color:white;border-radius: 48px 48px 48px 48px; color: black;padding:15px; color: white; font-weight:bold;">
                                    <h2>
                                        $ 5.99 Month 
                                    </h2>
                                </div>
                                <TinyMCEEditor :inlineEditor="inlineEditor" :modelValue="service" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template> 
<script>
  import TinyMCEEditor from '../../components/TinyMCEEditor.vue';
export default {
name:"Resume",
data(){
    return{
        inlineEditor:true,
        service: `<h3>OUR SERVICES</h3>
            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradise</p>`
    }
},
components:{
    TinyMCEEditor
}
}
</script>

<style>
.bg-white{
    background: white;
}
 
</style>