EnderIOEvents.conduits(event => {
    event.registerEnergyConduit("basic_energy_conduit", "Basic Energy Conduit", 640)
    event.registerEnergyConduit("enhanced_energy_conduit","Enhanced Energy Conduit",5120)
    event.registerEnergyConduit("vibrant_energy_conduit","Ender Energy Conduit",20480)
    event.registerEnergyConduit("crystalline_energy_conduit","Crystaline Energy Conduit",40960)
    event.registerEnergyConduit("melodic_energy_conduit","Melodic Energy Conduit",327680)
    event.registerEnergyConduit("stellar_energy_conduit","Stellar Energy Conduit",2000000000)
})

StartupEvents.registry("item", (event) => {
    event.create('crystalline_alloy').displayName('Crystaline Alloy Ingot')
    event.create('melodic_alloy').displayName('Melodic Alloy Ingot')
    event.create('stellar_alloy').displayName('Stellar Alloy Ingot')
    event.create('infinity_reagent').displayName('Infinity Reagent')
});
