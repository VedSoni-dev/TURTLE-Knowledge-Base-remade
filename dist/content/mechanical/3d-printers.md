# 3D Printers

## Exporting from CAD

### From SolidWorks

1. Open the part or assembly and verify sketches/features are fully resolved.
2. Choose **File → Save As** and pick a destination folder in your project workspace.
3. For an `.STL` export:
   - Set `Save as type` to `STL (*.stl)` and click **Options**.
   - Switch `Output as` to `Binary` for smaller files and set the unit to match your model.
   - Tighten `Deviation`/`Angle` as needed (`0.01 mm` and `5°` work for most prints), then confirm and save.
4. For a `.STEP` export:
   - Repeat the save-as workflow but choose `STEP AP214 (*.step)`.
   - In **Options**, select `AP214` to keep color/layer data when available.
   - Save the file alongside the STL so fabrication and CAD teams share the same revision.

### From Onshape

1. Open the Part Studio or Assembly tab containing the geometry you need to fabricate.
2. Select the part(s) or the assembly in the feature tree, then right-click and choose **Export**.
3. In the dialog, pick `STL` or `STEP` under **Format**.
4. For `STL`:
   - Choose `Binary` encoding, set the units (millimeters for most printers), and select the desired resolution preset.
   - Enable **Download** or **Send to cloud storage** depending on your workflow, then click **Export**.
5. For `STEP`:
   - Select `STEP AP214` for best compatibility.
   - Export to your Downloads folder or shared drive.

---

## File Formats

- **`.sldprt` and `.sldasm`** - used by Solidworks to store your part. They hold your feature information but cannot be read by most slicers.
- **`.STL`** - most common way to export 3D models for printing. Represents surface geometry without color or texture.
- **`.STEP`** - retains feature history and is widely used for sharing between CAD programs.

---

## Slicing

### Material Selection

- **PLA**: Easy to print, biodegradable, most common filament.
- **PETG**: More flexible and higher peak strength compared to PLA, meant for durability.
- **ABS**: Strong and heat-resistant, but requires heated bed and enclosure. Risk of warping.
- **TPU**: Flexible material, meant for parts that need to bend, stretch, or bounce.
- **Polycarbonate (PC)**: Extremely strong and heat-resistant, ideal for high-stress applications.
- **ASA**: Similar to ABS but with better UV resistance, suitable for outdoor applications.
- **CF (Carbon Fiber Reinforced)**: Improves strength and stiffness; requires hardened nozzles.
- **HF (High Flow)**: Improves print speed and layer adhesion.

### Choosing a Slicer

- **Bambu Studio**: Native support for AMS, multi-color, and machine profiles. Recommended for TURTLE Bambu printers.
- **Cura**: Common base that many proprietary slicers are based on. Good support for various personal printers.
- **PrusaSlicer**: Open-source with a steeper learning curve. Good for plugins and custom supports.
- **OrcaSlicer**: Newer slicer endorsed by the Rapid Prototyping Studio (RPS).

### Machine Parameters

- **Nozzle Diameter**: Most printers use a 0.4 mm nozzle.
- **Layer Height**: Between 0.1 mm (high detail) to 0.3 mm (faster prints).
- **Line widths**: Usually stick to default based on nozzle diameter.

### Printing Parameters

- **Infill Pattern**: Gyroid is a good all-around choice. Lightning for low-infill, cubic for high-infill.
- **Infill Density**: 15-20% is plenty for most parts.
- **Support Structures**: Tree supports are often optimal.

> **Note:** If you need a stronger part, you are often better off increasing wall loops than infill. Just like an I-beam puts more mass on the edges to better resist bending.

---

## Bambu Printing

### 1. Prep the printer

**PEI Plate:**
- Ensure the PEI plate is clean. If there is an oily residue, use dish soap.
- Avoid PETG, TPU, Nylon, PC, and CF-filled materials on PEI; they chemically bond to the surface.

**Cool/Engineering Plate:**
- Apply Elmer's glue stick. You just need a couple of dense swipes.
- Do not cool the plate too quickly.

### 2. Start the print

- Insert the SD card into the printer.
- From the printer menu, select the sliced file and start the print.
- Confirm material selections if prompted.

### 3. During the print

- Monitor the first two layers to ensure proper adhesion before leaving the lab.

### 4. Post-print

- Allow the bed to cool so parts release cleanly.
- Clean up any scrap filament; if you do not know whose part it is, place it in the bin labeled "Homeless Prints".

Reach out to an officer in the lab if you have any issues or questions!
