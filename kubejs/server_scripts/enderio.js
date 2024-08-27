ServerEvents.recipes(event => {
    event.remove({id: 'enderio:energy_conduit'})

    // Conductive Iron
    event.shaped(
        '8x enderio:basic_energy_conduit', [
            'AAA',
            'BBB',
            'AAA'
        ], {
            A: 'enderio:conduit_binder',
            B: '#forge:ingots/conductive_alloy'
        }
    )

    // Energetic Alloy
    event.shaped(
        '8x enderio:enhanced_energy_conduit', [
            'AAA',
            'BBB',
            'AAA'
        ], {
            A: 'enderio:conduit_binder',
            B: '#forge:ingots/energetic_alloy'
        }
    )

    // Vibrant Alloy
    event.shaped(
        '8x enderio:vibrant_energy_conduit', [
            'AAA',
            'BBB',
            'AAA'
        ], {
            A: 'enderio:conduit_binder',
            B: '#forge:ingots/vibrant_alloy'
        }
    )

    // Crystaline Alloy
    event.recipes.enderio.alloy_smelting(
        Item.of("kubejs:crystalline_alloy"),
        [Item.of("minecraft:gold_ingot"), Ingredient.of("enderio:pulsating_powder")],
        5000,
        0
    )
    event.shaped(
        '8x enderio:crystalline_energy_conduit', [
            'AAA',
            'BBB',
            'AAA'
        ], {
            A: 'enderio:conduit_binder',
            B: 'kubejs:crystalline_alloy'
        }
    )

    // Melodic Alloy
    event.recipes.enderio.alloy_smelting(
        Item.of("kubejs:melodic_alloy"),
        [Item.of("minecraft:popped_chorus_fruit"), Ingredient.of("enderio:end_steel_ingot")],
        20000,
        0
    )
    event.shaped(
        '8x enderio:melodic_energy_conduit', [
            'AAA',
            'BBB',
            'AAA'
        ], {
            A: 'enderio:conduit_binder',
            B: 'kubejs:melodic_alloy'
        }
    )

    // Stellar Alloy
    event.recipes.enderio.alloy_smelting(
        Item.of("kubejs:stellar_alloy", 2),
        [Item.of("minecraft:nether_star"), Ingredient.of("enderio:end_steel_ingot"), (Ingredient.of("minecraft:clay_ball"), 4)],
        20000,
        0
    )
    event.recipes.enderio.sag_milling(["kubejs:infinity_reagent"], "enderio:grains_of_infinity")
        .energy(500)
    
    event.shaped(
        '8x enderio:stellar_energy_conduit', [
            'AAA',
            'CBC',
            'AAA'
        ], {
            A: 'enderio:conduit_binder',
            B: 'kubejs:stellar_alloy',
            C: 'kubejs:infinity_reagent'
        }
    )
})